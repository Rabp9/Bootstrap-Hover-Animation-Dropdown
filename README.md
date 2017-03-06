
# Bootstrap Hover Animation Dropdown
Bootstrap Hover Animation Dropdown

Created a Bootstrap Hover Animation Dropdown, Use css effects from [Animate.css](https://github.com/daneden/animate.css)

##Bower
```
bower install bootstrap-hover-animation-dropdown --save
```

##Basic Usage
1. Include the Bootstrap and Animate.css's stylesheets on your document's `<head>`
  ```html
  <head>
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/animate.css" />
  </head>
  ```
2. Include the scripts on your document's body's bottom
  ```html
  <body>
		...
        <script src="js/jquery.js"></script>
        <script src="js/angular.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/bootstrap-hover-animation-dropdown.js.js"></script>
  </body>
  ```
3. Add the attributes in to your dropdown:
 ```html
  <div class="dropdown" bs-hover-dropdown animation-in="animationIn" animation-out="animationOut">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Dropdown
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
  ```
