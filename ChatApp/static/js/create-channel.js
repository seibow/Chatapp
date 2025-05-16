window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("channelModal");
  const modalTitle = document.getElementById("modalTitle");
  const openCreateBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("closeModalBtn");
  const inputName = document.getElementById("channelName");
  const inputSummary = document.getElementById("channelSummary");

  openCreateBtn.addEventListener("click", () => {
    modalTitle.textContent = "チャンネル作成";
    inputName.value = "";
    inputSummary.value = "";    
    modal.style.display = "flex";
  });

  const editButtons = document.querySelectorAll(".edit-pen");

  editButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      modalTitle.textContent = "チャンネル編集";

      const channelBox = event.target.closest(".channel-title-box");
      const title = channelBox.querySelector(".channel-title").textContent.trim();
      const summary = channelBox.querySelector(".channel-summary").textContent.trim();

      inputName.value = title;
      inputSummary.value = summary;
      
      modal.style.display = "flex";
    })
  })

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
