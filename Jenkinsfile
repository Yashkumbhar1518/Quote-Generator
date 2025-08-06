pipeline {
  agent {
    docker {
      image 'node:18'
      args '-u 0'   // 👈 run as root inside the container
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
      export HOME=$(pwd)
      mkdir -p .npm_cache
      npm config set cache $(pwd)/.npm_cache

      # 🔥 Clean up previous installs
      rm -rf node_modules package-lock.json

      # ✅ Fresh install
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
          fuser -k 3000/tcp || true
          npx serve -s build -l 3000 &
          echo "✅ App running at http://<EC2_PUBLIC_IP>:3000"
        '''
      }
    }
  }
}

