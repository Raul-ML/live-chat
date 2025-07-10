const state = {
    data: {
        user: "",
        publicRooms:[] as string[],
        privateRooms:[] as string[],
    },
    listeners: [] as ((state: any) => void)[],
    getState() {
      return this.data;
    },
    setState(newState:any) {
       this.data=newState;
       for (const cb of this.listeners){
        cb(newState);
       }
       console.log("Soy el state, he cambiado ", this.data )
    },
    subscribe(callback: (any:any)=>any) {
        this.listeners.push(callback);
    },
    addItem(item:string) {
        const cs = this.getState();
        cs.privateRooms.push(item);
        this.setState(cs);
    },
  };

  export {state};
  