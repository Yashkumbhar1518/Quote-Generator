pipeline {
  agent {
    docker {
      image 'node:18'
      args '-p 3000:3000'
    }
  }

  stages {
    stage('Checkout') {
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

    stage('Install Serve') {
      steps {
        sh 'npm install -g serve'
      }
    }

    stage('Run App') {
      steps {
        // run app in background inside container
        sh 'nohup serve -s build -l 3000 > serve.log 2>&1 &'
      }
    }
  }
      }
    }
  }
