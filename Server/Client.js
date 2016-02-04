'use strict';

class Client {

  constructor() {
    this.Username = '';
    this.Password = '';
    this.Email = '';
    this.Registration = '';
    this.Inactive = false;
    this.Playermobile = null;
    this.IPAddress = '';
    this.Browser = '';
    this.DBClient = null;
    this.Socket = null;
  }

  Login() {
    // pg.select()
  }

}

module.exports = Client;