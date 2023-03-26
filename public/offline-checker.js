window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function updateOnlineStatus(event) {
  if (!navigator.onLine) {
    document.getElementById("body").style.display = "none";
    document.getElementById("navbar").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("offline-alert").style.display = "block";
  } else {
    document.getElementById("body").style.display = "block";
    document.getElementById("navbar").style.display = "block";
    document.getElementById("header").style.display = "block";
    document.getElementById("offline-alert").style.display = "none";
  }
}
