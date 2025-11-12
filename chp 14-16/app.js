
        
        // 1. Empty array
        var arr1 = [];
        console.log("1:", arr1);
        
        // 2. Empty array using new
        var arr2 = new Array();
        console.log("2:", arr2);
        
        // 3. String array
        var arr3 = ["apple", "banana"];
        console.log("3:", arr3);
        
        // 4. Number array
        var arr4 = [10, 20, 30];
        console.log("4:", arr4);
        
        // 5. Boolean array
        var arr5 = [true, false, true];
        console.log("5:", arr5);
        
        // 6. Mixed array
        var arr6 = ["text", 25, true];
        console.log("6:", arr6);
        
        // 7. Education array
        var edu = ["SSC", "HSC", "BS"];
        console.log("7:");
        for(var i = 0; i < edu.length; i++) {
            console.log(edu[i]);
        }
        
     
       
        
        var scores = [320, 230, 480];
        var total = 500;
        
        for(var i = 0; i < scores.length; i++) {
            var percent = (scores[i] / total) * 100;
            console.log("Student", i+1, ":", scores[i], "=", percent + "%");
        }
        
  

        
        var colors = ["Red", "Green", "Blue"];
        console.log("Start:", colors);
        

        var newColors = ["Yellow"];
        for(var i = 0; i < colors.length; i++) {
            newColors[newColors.length] = colors[i];
        }
        colors = newColors;
        console.log("Add start:", colors);
        
  
        colors[colors.length] = "Purple";
        console.log("Add end:", colors);
        
        var newColors2 = ["Orange", "Pink"];
        for(var i = 0; i < colors.length; i++) {
            newColors2[newColors2.length] = colors[i];
        }
        colors = newColors2;
        console.log("Add two start:", colors);
        
 
        var newColors3 = [];
        for(var i = 1; i < colors.length; i++) {
            newColors3[newColors3.length] = colors[i];
        }
        colors = newColors3;
        console.log("Remove first:", colors);
        
       
        var newColors4 = [];
        for(var i = 0; i < colors.length - 1; i++) {
            newColors4[newColors4.length] = colors[i];
        }
        colors = newColors4;
        console.log("Remove last:", colors);
        
 
        var newColors5 = [];
        for(var i = 0; i < colors.length; i++) {
            if(i == 2) {
                newColors5[newColors5.length] = "White";
            }
            newColors5[newColors5.length] = colors[i];
        }
        colors = newColors5;
        console.log("Add at index 2:", colors);
        
 
        var newColors6 = [];
        for(var i = 0; i < colors.length; i++) {
            if(i < 1 || i > 2) {
                newColors6[newColors6.length] = colors[i];
            }
        }
        colors = newColors6;
        console.log("Remove 2 from index 1:", colors);
        
        // Part 4
        console.log("--- Part 4 ---");
        
        var num = [320, 230, 480, 120];
        console.log("Before sort:", num);
        
 
        for(var i = 0; i < num.length; i++) {
            for(var j = i + 1; j < num.length; j++) {
                if(num[i] > num[j]) {
                    var temp = num[i];
                    num[i] = num[j];
                    num[j] = temp;
                }
            }
        }
        console.log("After sort:", num);
        
  
        var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
        var newCities = [];
        
        for(var i = 2; i <= 4; i++) {
            newCities[newCities.length] = cities[i];
        }
        console.log("Cities copy:", newCities);
        
   
        var words = ["This", "is", "my", "cat"];
        var text = "";
        for(var i = 0; i < words.length; i++) {
            if(i > 0) {
                text = text + " ";
            }
            text = text + words[i];
        }
        console.log("Sentence:", text);
        

        
        var items = ["keyboard", "mouse", "printer", "monitor"];
        


        var queue = [];
        for(var i = 0; i < items.length; i++) {
            queue[queue.length] = items[i];
        }
        
        var index = 0;
        while(index < queue.length) {
            console.log("Take:", queue[index]);
            index++;
        }
        
 

        var stack = [];
        for(var i = 0; i < items.length; i++) {
            stack[stack.length] = items[i];
        }
        
        var lastIndex = stack.length - 1;
        while(lastIndex >= 0) {
            console.log("Take:", stack[lastIndex]);
            lastIndex--;
        }
        

