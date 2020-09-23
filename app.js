class App {
  constructor() {
    console.log("app works!");
    this.$form  = document.querySelector('#form')
  }

  addEventListeners() {
    document.body.addEventListener("click", (event) => {
      handleFormClick(event);
    });
  }
}

new App();
