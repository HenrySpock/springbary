//-------------------------------------
//Global array for appending to the DOM
let funcList = [];

class Exercise {
    constructor(id, name, args, description, func, str, argType) {
      this.id = id;
      this.name = name;
      this.args = args;
      this.description = description;
      this.func = func;    
      this.str = str;
      this.argType = argType;
  }
};
