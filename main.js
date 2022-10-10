    //1. Complete the function startClassification
function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    //2. Link the Teachable Machine Model  by adding the link inside soundClassifier command:
      classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
   }
    
    //3. Complete the function modelReady
   function modelReady(){
    classifier.classify(gotResults);
   }
    
    //4. Complete the function gotResults
   function gotResults(error, results) {
    
    if (error) {
      console.error(error);
    } else {
      console.log(results);
    //5. Create 2 random numbers from 1 to 255 for each color of RGB:
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
    
    
    //6. Show the result of what the program hear on "result_label" from HTML
      document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    //7. Show the random color for "result_confidence" from HTML
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
    //8. Set the 4 images for each alien on HTML
      img = document.getElementById('alien1');
      img1 = document.getElementById('alien2');
      img2 = document.getElementById('alien3');
      img3 = document.getElementById('alien4');
     
    //9. Complete the IF statement so the program can make the alien move according to the result of the sound:
    
      if (results[0].label == "Clap") {
        img.src = 'aliens-01.gif';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      } else if (results[0].label == "Bell") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.gif';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      } else if (results[0].label == "Snapping") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.gif';
        img3.src = 'aliens-04.png';       
      }else{
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.gif';
       }
    }
   }
   