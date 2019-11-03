# SpringBoot + React 설정

* springboot, React 구성
  * Springboot은 gradle 기반
  * React는 webpack, babel 기반

## Gradle 빌드 설정

[node plugin](https://github.com/srs/gradle-node-plugin/blob/master/docs/node.md)을 추가하여 front와 스프링을 빌드함.

* gradle 에 node plugin 추가
```groovy
plugins {
   ...
   id "com.moowork.node" version "1.3.1"
}
```

* node 설정 추가
```groovy
node {
	version = '10.15.0'
	npmVersion = '6.4.1'
	download = false
}
```

* Task 추가
```groovy
task webpack(type: NpmTask, dependsOn: 'npmInstall') {
	args = ['run', 'build']
}

processResources.dependsOn 'webpack'
```

## WebPack 설정

빌드할 파일과 번들파일 생성 경로를 아래 아래 처럼 지정

```javaScript
  entry: {
    app: path.resolve(__dirname, 'src/frontend/index.js') // react 
  },

  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname,'src/main/resources/static'), // 빌드 후 배포 경로
  },
```
* output 경로는 스프링 boot 정적 리소스 경로로 구성함.