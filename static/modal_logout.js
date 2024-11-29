// modal.js
document.addEventListener('DOMContentLoaded', (event) => {
    function confirmLogout(event) {
        event.preventDefault(); // Mencegah aksi default dari link
        
        // Tampilkan modal
        document.getElementById('logoutModal').style.display = 'block';
    }

    // Ambil elemen modal dan tombol
    var modal = document.getElementById('logoutModal');
    var confirmButton = document.getElementById('confirmLogout');
    var cancelButton = document.getElementById('cancelLogout');
    var closeButton = document.getElementsByClassName('close')[0];

    // Ketika pengguna mengklik tombol "Konfirmasi Logout"
    confirmButton.onclick = function() {
        window.location.href = "{{ url_for('login') }}";
    }

    // Ketika pengguna mengklik tombol "Batal Logout"
    cancelButton.onclick = function() {
        modal.style.display = 'none';
    }

    // Ketika pengguna mengklik tombol "Tutup" (x)
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    // Ketika pengguna mengklik di luar modal, tutup modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    
    // Ganti fungsi confirmLogout
    document.querySelector("{{ url_for('login') }}").addEventListener('click', confirmLogout);
});
