pipeline {
    agent {
        docker {
            image 'node:18'
            args '-u jenkins'
        }
    }
    stages {
        stage('Clean Workspace') {
            steps {
                sh 'rm -rf node_modules build'
            }
        }
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
        stage('Run App') {
            steps {
                sh 'npm install -g serve'
                sh 'nohup serve -s build -l 3000 > serve.log 2>&1 &'
                echo 'App running — open: http://<EC2_PUBLIC_IP>:3000'
            }
        }
    }
}
