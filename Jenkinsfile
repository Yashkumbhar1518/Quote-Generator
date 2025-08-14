pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }

    stages {
        stage('Clone Repo') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy and Run App') {
            steps {
                sh 'npm install -g serve'
                // Kill any existing serve process
                sh "pkill -f 'serve' || true"
                // Start app in background (host network so it’s reachable via EC2 IP)
                sh 'nohup serve -s build -l 3000 > serve.log 2>&1 &'
            }
        }
    }

    post {
        success {
            echo "✅ App deployed! Visit: http://<EC2-PUBLIC-IP>:3000"
        }
    }
}
