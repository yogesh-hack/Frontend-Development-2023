// we use router form module file

const express = require("express")

const RouterMiddleware = require("./module.js")

class GreetingService {
  constructor(greeting = "Hello") {
      this.greeting = greeting;
    }
  
  createGreeting(name) {
      return `${this.greeting, ${name} !`;
    }
}



express().use('/api/services1',RouterMiddleware({
  service : new GreetingService("hello"),
}))
  .use('/api/services2',RouterMiddleware({
    service : new GreetingService("hii.."),
}))
  .use('/api/services3',RouterMiddleware({
    service : new GreetingService("How are you"),
}))
