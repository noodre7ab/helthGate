const editBtn = document.getElementById('editProfileBtn');
const popup = document.getElementById('uploadPopup');
const closePopup = document.getElementById('closePopup');
const cancelPopup = document.getElementById('cancelPopup');

editBtn.addEventListener('click', () => popup.style.display = 'flex');
closePopup.addEventListener('click', () => popup.style.display = 'none');
cancelPopup.addEventListener('click', () => popup.style.display = 'none');

// ====== Chronic Disease Popup ======
const diseasePopup = document.getElementById("diseasePopup");
const openDiseasePopup = document.querySelector(".info-box:nth-of-type(3) .edit-icon");
const closeDiseasePopup = document.getElementById("closeDiseasePopup");
const cancelDiseasePopup = document.getElementById("cancelDiseasePopup");
const addDiseaseBtn = document.getElementById("addDiseaseBtn");
const diseaseInput = document.getElementById("diseaseInput");
const diseaseList = document.querySelector(".disease-list");

// فتح البوب أب لما نضغط على القلم
openDiseasePopup.addEventListener("click", () => {
    diseasePopup.style.display = "flex";
});

// إغلاق البوب أب
closeDiseasePopup.addEventListener("click", () => {
    diseasePopup.style.display = "none";
});

cancelDiseasePopup.addEventListener("click", () => {
    diseasePopup.style.display = "none";
});

// إضافة المرض للقائمة
addDiseaseBtn.addEventListener("click", () => {
    const newDisease = diseaseInput.value.trim();
    if (newDisease !== "") {
        const li = document.createElement("li");
        li.textContent = "🏥 " + newDisease;
        diseaseList.appendChild(li);
        diseaseInput.value = "";
        diseasePopup.style.display = "none";
    }
});
