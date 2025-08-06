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
    sh '''
      # Set NPM cache directory to a workspace-local folder
      mkdir -p .npm_cache
      npm config set cache .npm_cache

      # Now install dependencies
      npm install
    '''
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
      # Kill existing port 3000 processes
      fuser -k 3000/tcp || true

      # Use npx to serve the app without global install
      npx serve -s build -l 3000 &

      echo "✅ App running at http://<EC2_PUBLIC_IP>:3000"
    '''
  }
}
  }
}
