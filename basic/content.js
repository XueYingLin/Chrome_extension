console.log('Here we are')

let paragraphs = document.getElementsByTagName('p')
for (element of paragraphs) {
  console.log(element)
  element.style['background-color'] = '##3aa757'
}
