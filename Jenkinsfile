pipeline {
  agent {
    docker {
      image 'node:18'  // Node.js image for React
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

    stage('Serve React App') {
      steps {
        sh '''
          # Install serve if not already
          npm install -g serve

          # Kill any process running on port 3000
          fuser -k 3000/tcp || true

          # Serve the React build
          serve -s build -l 3000 &
          
          echo "✅ React app running at http://<EC2_PUBLIC_IP>:3000"
        '''
      }
    }
  }
}
