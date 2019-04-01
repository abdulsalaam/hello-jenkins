pipeline {
  agent any
  stages {
    stage('fetch') {
      steps {
        git(url: ' https://github.com/abdulsalaam/hello-jenkins', branch: 'master')
      }
    }
  }
}