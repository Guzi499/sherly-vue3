pipeline {
    agent {
        docker {
            image 'node:12-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('yarn 构建') {
            steps {
                sh 'node -v'
                sh 'yarn -v'
                sh 'yarn'
                sh 'yarn build'
            }
        }
        stage('远程部署') {
            steps{
                sshPublisher(publishers: [sshPublisherDesc(configName: 'tencentcloud', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: 'cd /root/nginx/html; echo 1;rm -rf !(axure); echo 2; cp -r dist/* .; echo 3; rm -rf dist echo 4;', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/root/nginx/html', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'dist/**')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
            }
        }
    }
}