

class LsStorage {


    
    /**
     * Chack Data form LS 
     * @param {*} key 
     * @returns 
     */
     static has(key){

        return localStorage.getItem(key) ? localStorage.getItem(key) : false ;   
    };

        /**
     * Data Send to LS 
     * @param {*} key 
     * @param {*} arr 
     */

         static dataSend(key , arr){

            let set = [];

            if(this.has(key)){
    
                set = JSON.parse(this.has(key));
    
            };
            set.push(arr);
            localStorage.setItem(key, JSON.stringify(set));
    
        };

        /**
     * Data Get form LS 
     * @param {*} key 
     * @returns 
     */
         static dataGet(key){

            if(this.has(key)){

              return JSON.parse(this.has(key));

            }else{
                return [];
            }
            
        };






}

export default LsStorage;