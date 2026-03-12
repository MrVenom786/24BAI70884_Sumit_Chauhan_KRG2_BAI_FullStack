const postSection = document.getElementById("postSection");
const listSection = document.getElementById("listSection");

function showSection(section) {
  [postSection, listSection].forEach(sec => {
    sec.classList.add("hidden");
    sec.classList.remove("show");
  });
  section.classList.remove("hidden");
  setTimeout(() => section.classList.add("show"), 50);
}

document.getElementById("showPost").addEventListener("click", () => {
  showSection(postSection);
});

document.getElementById("showList").addEventListener("click", () => {
  showSection(listSection);
});

document.getElementById("postForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  try {
    const response = await fetch("/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body })
    });

    if (response.ok) {
      document.getElementById("postMessage").textContent = "✅ Post submitted successfully!";
      e.target.reset();
    } else {
      document.getElementById("postMessage").textContent = "❌ Failed to submit post.";
    }
  } catch (error) {
    document.getElementById("postMessage").textContent = "⚠️ Error submitting post.";
  }
});

const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");

document.getElementById("addItem").addEventListener("click", () => {
  const value = itemInput.value.trim();
  if (value) {
    const li = document.createElement("li");
    li.textContent = value;
    itemList.appendChild(li);
    itemInput.value = "";
  }
});

document.getElementById("removeItem").addEventListener("click", () => {
  if (itemList.lastChild) {
    itemList.removeChild(itemList.lastChild);
  }
});