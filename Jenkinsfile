pipeline {
    agent {
        docker {
            image 'node:18'
            args '-u root:root'
        }
    }

    environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }

    stages {
        stage('Clone Repo') {
            steps {
                checkout scm
            }
        }
        stage('Clean Old Dependencies') {
            steps {
                sh 'rm -rf node_modules package-lock.json build'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install --legacy-peer-deps'
            }
        }
        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Serve App') {
            steps {
                sh 'npm install -g serve'
                sh "nohup serve -s build -l 3000 > serve.log 2>&1 &"
            }
        }
    }

    post {
        success {
            echo "✅ App running at: http://<EC2-PUBLIC-IP>:3000"
        }
        failure {
            echo "❌ Build failed — check Jenkins logs."
        }
    }
}
