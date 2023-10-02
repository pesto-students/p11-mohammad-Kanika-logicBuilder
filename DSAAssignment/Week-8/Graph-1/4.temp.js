var partition = function(s) {

    let path = [];
     let res = [];
     createpartition(s,0,path,res);
     return res;
     function createpartition(s,index,path,res){
        // if index is equal to the length of the string then we have reached the end of the string
        // when we reach end of string means that these are the valid partitions
         if(index==s.length){
            // we have use ... operator to make a copy of the path array
            // it is a spread operator - it will spread the array and make a copy of it deep copy
             res.push([...path]);
             return
         }
// this for loop will iterate over the string from the index to the end of the string

         for(let i=index;i<s.length;i++){
             let currentSubstring=s.substring(index,i+1)
             if(isPlaindrome(s,index,i)){
                 path.push(currentSubstring);
                 createpartition(s,i+1,path,res)
                 path.pop();
             }
  
         }
     }
      
    
      function isPlaindrome(s,start,end){
          while(start<=end){
              if(s[start]!==s[end]) return false
              start=start+1;
              end=end-1;
          }
          return true;
  
  
      }
      
  }