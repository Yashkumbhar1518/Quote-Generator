pipeline {
  agent any

  stages {
    stage('Clone Repository') {
      steps {
        checkout scm
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t react-app .'
      }
    }

    stage('Run React App in Container') {
      steps {
        sh '''
          # Stop old container if running
          docker rm -f react-container || true

          # Run new container
          docker run -d -p 3000:80 --name react-container react-app

          echo "✅ React app is running at http://<your-ec2-ip>:3000"
        '''
      }
    }
  }
}
