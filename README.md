# sveltejs-progressbar

### Installation

Install using NPM

```sh
npm i sveltejs-progressbar
```
### Import package to your component

```js
  import Progress from 'sveltejs-progressbar'
```
### Use

 Put this in your html 
 
```sh
  <Progress/>
```

### Options

sveltejs-progressbar support for these options

| Option | Type | Default |
| ------ | ------ |  ------ |
| progress | number | 50 |
| color | string | Blue |

 Example:
 
```sh
   <Progress progress={50} color={'blue'}/>
```