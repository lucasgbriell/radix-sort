import React from 'react';

export default class RadixComp extends React.Component{
    constructor(){
        super();
        this.state = {
            my_array : [4,3,25,1,2,1],
            final_array:[]
        };
    }
        add(){
            var joined = this.state.my_array.concat(0);
            this.setState({ my_array: joined })
        }
        radix() {
            let arr = this.state.my_array;
            var joine; 
            var idx1, idx2, idx3, len1, len2, radix, radixKey;
            var radices = {}, buckets = {}, num, curr;
            var currLen, radixStr, currBucket;
        
            len1 = arr.length;
            len2 = 10;  // radix sort uses ten buckets
        
            // find the relevant radices to process for efficiency        
            for (idx1 = 0;idx1 < len1;idx1++) {
              radices[arr[idx1].toString().length] = 0;
            }
        
            // loop for each radix. For each radix we put all the items
            // in buckets, and then pull them out of the buckets.
            for (radix in radices) {          
              // put each array item in a bucket based on its radix value
              len1 = arr.length;
              for (idx1 = 0;idx1 < len1;idx1++) {
                curr = arr[idx1];
                // item length is used to find its current radix value
                currLen = curr.toString().length;
                // only put the item in a radix bucket if the item
                // key is as long as the radix
                if (currLen >= radix) {
                  // radix starts from beginning of key, so need to
                  // adjust to get redix values from start of stringified key
                  radixKey = curr.toString()[currLen - radix];
                  // create the bucket if it does not already exist
                  if (!buckets.hasOwnProperty(radixKey)) {
                    buckets[radixKey] = [];
                  }
                  // put the array value in the bucket
                  buckets[radixKey].push(curr);          
                } else {
                  if (!buckets.hasOwnProperty('0')) {
                    buckets['0'] = [];
                  }
                  buckets['0'].push(curr);          
                }
              }
              // for current radix, items are in buckets, now put them
              // back in the array based on their buckets
              // this index moves us through the array as we insert items
              idx1 = 0;
              // go through all the buckets
              for (idx2 = 0;idx2 < len2;idx2++) {
                // only process buckets with items
                if (buckets[idx2] != null) {
                  currBucket = buckets[idx2];
                  // insert all bucket items into array
                  len1 = currBucket.length;
                  for (idx3 = 0;idx3 < len1;idx3++) {
                    arr[idx1++] = currBucket[idx3];
                  }
                }
              }
              buckets = {};
            }
            
            console.log(arr);
          }

    render(){
        return(
            <div>
                <h1>{this.state.my_array}</h1>
                <h2>Final: {this.state.final_array}</h2>
                <div>
                    <button onClick={this.add.bind(this)}>Add</button><br/>
                    <button onClick={this.radix.bind(this)}>Organize</button>
                </div>
            </div>
        );
    }
}