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
        stage('Clean & Install Dependencies') {
            steps {
                sh 'rm -rf node_modules package-lock.json build'
                sh 'npm install ajv@^8 ajv-keywords@^5 --save-dev'
                sh 'npm ci --legacy-peer-deps'
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
    }
}
