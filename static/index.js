const imageInput = document.getElementById("file");
        const imagePreview = document.getElementById("preview-image");
        const imagePreviewContainer = document.querySelector(".image-preview");

        imageInput.addEventListener("change", function () {
            if (imageInput.files && imageInput.files[0]) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    imagePreview.src = e.target.result;
                    imagePreviewContainer.style.display = "block";
                };

                reader.readAsDataURL(imageInput.files[0]);
            }
        });

let slideIndex = 0;


function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 2000); // Change image every 2 seconds (adjust the time as needed)
} 
showSlides();
let remedy=["<ul><li>Isolate the affected plants from healthy ones to prevent further spread.<li>Remove and destroy the infected leaves or parts of the plant. Ensure proper disposal by burning or burying the affected plant material deeply.<li>Adjust watering practices: Avoid overhead watering to reduce leaf wetness and humidity.<li>Improve airflow: Properly space plants for better air circulation to reduce moisture around the foliage.<li>Consider applying fungicides labeled for Early Blight control. Follow instructions and safety precautions specified on the product label.<li>Apply fungicides at the recommended intervals and ensure thorough coverage of the affected plant parts.</ul>",
"<ul><li> Isolate and remove infected leaves or plant parts immediately to prevent the spread of the disease.<li>Consider using fungicides labeled for Late Blight control. Apply as per instructions and safety guidelines provided on the product label.<li>mplement cultural practices such as proper plant spacing, watering methods (avoiding overhead watering), and ensuring good air circulation around plants to minimize moisture on leaves.</ul>",
"<ul><li>Congrats your plant are disease free.<li>Keep a regular Eye on the leaves in case of any disease</ul>",
"<ul><li>Clean and disinfect gardening tools, stakes, and equipment that have come into contact with infected plants. This helps prevent the spread of the bacteria to healthy plants.</li><li>Copper-based fungicides can help manage bacterial spot. Apply these as directed on the label. However, note that excessive use can harm plants, so follow instructions carefully.</li><li>Avoid planting tomatoes or other susceptible plants in the same location for several years to reduce the risk of bacterial spot recurrence.</li><li>Water the plants at the base to avoid wetting leaves. Drip irrigation or soaker hoses can be helpful.</li><li>Consider planting tomato varieties that are resistant or tolerant to bacterial spot if available in your region.</li><li>Some organic options, such as neem oil or garlic-based sprays, might offer some control over bacterial spot. These should be applied as directed on the product label.</li></ul>",
"<ul><li>Apply a layer of organic mulch around plants to reduce soil splashing onto leaves, as the fungus often spreads through soil contact with the lower leaves.</li><li>Water the plants at the base early in the day to allow the foliage to dry quickly, reducing moisture and inhibiting fungal growth. </li><li>Avoid overhead watering.Apply fungicides labeled for early blight control. </li><li>Copper-based fungicides or those containing chlorothalonil or mancozeb can help manage the disease.</li><li>Avoid planting tomatoes or related plants in the same location for at least two to three years to prevent the recurrence of the disease.</li><li>Apply organic solutions like neem oil or sulfur-based sprays preventively. These can act as a barrier against fungal infections but may not entirely eliminate established infections.</li></ul>",
"<ul><li>Water the plants at the base early in the day to allow the foliage to dry quickly, reducing moisture and inhibiting fungal growth Avoid overhead watering.</li><li>Apply fungicides labeled for early blight control.</li><li> Copper-based fungicides or those containing chlorothalonil or mancozeb can help manage the disease.Avoid planting tomatoes or related plants in the same location for at least two to three years to prevent the recurrence of the disease.</li><li>Apply organic solutions like neem oil or sulfur-based sprays preventively. These can act as a barrier against fungal infections but may not entirely eliminate established infections.</li></ul>",
"<ul><li>Apply copper-based fungicides or other fungicides labeled for leaf mold control. Follow the instructions on the label for proper application and safety precautions.</li><li>Prune and remove infected leaves as soon as you notice symptoms. Dispose of the infected plant parts away from the garden to prevent the spread of spores.</li><li>Keep the garden clean by removing debris and fallen leaves regularly. This reduces the chances of fungal spores surviving and spreading.</li><li>Apply a layer of organic mulch around plants to prevent soil splashing onto lower leaves.Use organic solutions like neem oil or potassium bicarbonate preventively to create a protective barrier against fungal infections. These may help reduce the chances of leaf mold establishment.</li></ul>",
"<ul><li>Apply copper-based fungicides or other fungicides labeled for leaf mold control. Follow the instructions on the label for proper application and safety precautions.</li><li>Prune and remove infected leaves as soon as you notice symptoms. Dispose of the infected plant parts away from the garden to prevent the spread of spores.</li><li>Keep the garden clean by removing debris and fallen leaves regularly. This reduces the chances of fungal spores surviving and spreading.</li><li>Apply a layer of organic mulch around plants to prevent soil splashing onto lower leaves.Use organic solutions like neem oil or potassium bicarbonate preventively to create a protective barrier against fungal infections. These may help reduce the chances of leaf mold establishment.</li></ul>",
"<ul><li>Horticultural oils, such as dormant oil or summer oil, can suffocate spider mites. Apply as directed on the label, making sure to cover the entire plant, including the undersides of leaves.</li><li>Encourage beneficial insects like ladybugs, predatory mites, lacewings, and predatory thrips that feed on spider mites. You can attract these insects by planting companion plants that attract them or by purchasing and releasing them in your garden.</li><li>Remove and dispose of heavily infested leaves or plant parts to prevent the spread of spider mites to healthier areas of the plant.</li><li>If possible, isolate infested plants to prevent the spread of spider mites to other plants in the garden.</li></ul>",
"<ul><li>Consider planting tomato varieties that are resistant or less susceptible to target spot if available in your region.</li><li>Apply a layer of organic mulch around plants to prevent soil splashing onto lower leaves.</li><li>Apply organic solutions like neem oil or potassium bicarbonate preventively to create a protective barrier against fungal infections. These may help reduce the chances of target spot establishment.</li><li>Ensure proper spacing between plants to improve air circulation.</li><li> Good airflow reduces humidity around the plants, making it less favorable for the fungus.</li></ul>",
"<ul><li>Control and manage whiteflies, which transmit the virus. Use insecticidal soaps, neem oil, or other insecticides labeled for whitefly control.</li><li> Yellow sticky traps can also help reduce their population.</li><li>Use floating row covers or mesh netting to physically prevent whiteflies from reaching the tomato plants. Be sure to secure the covers properly to prevent gaps.</li><li>Consider planting companion plants that repel whiteflies or attract beneficial insects that prey on whiteflies, such as marigolds, basil, or coriander.</li><li>Avoid excessive nitrogen fertilization, which can make plants more attractive to whiteflies. Instead, maintain balanced nutrition to keep plants healthy without stimulating excessive growth.</li></ul>",
"<ul><li>Start with seeds and transplants from reliable sources to reduce the risk of introducing the virus to your garden.</li><li>Wash hands thoroughly before handling plants to prevent transmitting the virus from infected plants to healthy ones.These insects can transmit the virus.</li><li> Use insecticidal soaps, neem oil, or insecticides labeled for aphid and whitefly control. </li><li>Yellow sticky traps can also help reduce their population.</li><li>Tobacco can harbor the virus. If you smoke, wash your hands thoroughly before handling tomato plants.</li><li>Rotate tomatoes with other plant families each season to break the virus's lifecycle in the soil.</li></ul>",
"<ul><li>Congrats your plant are disease free.<li>Keep a regular Eye on the leaves in case of any disease</ul>"];
function uploadFile() {
            
    var fileInput = document.getElementById('file');
    var file = fileInput.files[0];
    var plant = document.getElementById('plant');
    var selectedOption = plant.options[plant.selectedIndex];

// Get the value of the selected option
    var selectedValue = selectedOption.value;
    var formData = new FormData();
    formData.append('image', file);
    formData.append('plant', selectedValue)
    document.getElementById('result').innerText = "Processing... ";               

    fetch('/classify', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response:', data);

        document.getElementById('result').innerText = " Result: " + " " + data.result +  " " + "\nClassification Confidence: " + " " + data.confidence;               
        
        if(data.result=="Potato Early blight"){
            document.getElementById("Remedy_info").innerHTML=remedy[0];
        }
        else if(data.result=="Potato Late blight"){
            document.getElementById("Remedy_info").innerHTML=remedy[1];
        }
        else if(data.result=="Potato healthy"){
            document.getElementById("Remedy_info").innerHTML=remedy[2];
        }
        else if(data.result=="Tomato___Bacterial_spot"){
            document.getElementById("Remedy_info").innerHTML=remedy[3];
        }
        else if(data.result=="Tomato___Early_blight"){
            document.getElementById("Remedy_info").innerHTML=remedy[4];
        }
        else if(data.result=="Tomato___Late_blight"){
            document.getElementById("Remedy_info").innerHTML=remedy[5];
        }
        else if(data.result=="Tomato___Leaf_Mold"){
            document.getElementById("Remedy_info").innerHTML=remedy[6];
        }
        else if(data.result=="Tomato___Septoria_leaf_spot"){
            document.getElementById("Remedy_info").innerHTML=remedy[7];
        }
        else if(data.result=="Tomato___Spider_mites Two-spotted_spider_mite"){
            document.getElementById("Remedy_info").innerHTML=remedy[8];
        }
        else if(data.result=="Tomato___Target_Spot"){
            document.getElementById("Remedy_info").innerHTML=remedy[9];
        }
        else if(data.result=="Tomato___Tomato_Yellow_Leaf_Curl_Virus"){
            document.getElementById("Remedy_info").innerHTML=remedy[10];
        }
        else if(data.result=="Tomato___Tomato_mosaic_virus"){
            document.getElementById("Remedy_info").innerHTML=remedy[11];
        }
        else if(data.result=="Tomato___healthy"){
            document.getElementById("Remedy_info").innerHTML=remedy[12];
        }

    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Error occurred during file upload try again file to large.';
    });
}
document.getElementById("submit").addEventListener("click", uploadFile)

      



        
function smoothScroll(event) {
    event.preventDefault(); // Prevent default anchor behavior

    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth' // Smooth scrolling behavior
        });
    }
}


