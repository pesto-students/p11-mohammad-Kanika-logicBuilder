class MyPromise{
    constructor(callback){
        try{
        callback(this.onSucess,this.onFail)
        }
        catch(e){
            this.#onFail(e)
        }
        
    }
    #onSucess(value){

    }
    #onFail(){

    }
    then(cb){

    }


}

module.exports=MyPromise