// Unit Data Structure (Mocking Level 6 CDACC Units)
const units = [
    {
        id: 1,
        name: "Database Management Systems",
        code: "CS/L6/01",
        written: [
            { title: "CAT 1", grade: "85%", link: "#" },
            { title: "CAT 2", grade: "78%", link: "#" },
            { title: "Final Exam", grade: "A", link: "#" }
        ],
        practical: [
            { title: "SQL Lab 1", grade: "Achieved", link: "#" },
            { title: "ERD Design", grade: "Achieved", link: "#" },
            { title: "DB Implementation", grade: "Distinction", link: "#" }
        ]
    },
    {
        id: 2,
        name: "Web Development",
        code: "CS/L6/02",
        written: [
            { title: "HTML Basics CAT", grade: "90%", link: "#" },
            { title: "CSS Frameworks", grade: "82%", link: "#" },
            { title: "JS Logic Test", grade: "88%", link: "#" }
        ],
        practical: [
            { title: "Portfolio Project", grade: "Distinction", link: "#" },
            { title: "API Integration", grade: "Achieved", link: "#" },
            { title: "Git Workflow", grade: "Achieved", link: "#" }
        ]
    }
];

// Display Units
const unitGrid = document.getElementById('unitGrid');
const searchInput = document.getElementById('unitSearch');

function displayUnits(filter = "") {
    unitGrid.innerHTML = "";
    const filtered = units.filter(u => u.name.toLowerCase().includes(filter.toLowerCase()));
    
    filtered.forEach(unit => {
        const div = document.createElement('div');
        div.className = 'unit-card';
        div.innerHTML = `<h3>${unit.name}</h3><p>${unit.code}</p>`;
        div.onclick = () => openUnit(unit);
        unitGrid.appendChild(div);
    });
}

// Modal Logic
const modal = document.getElementById('unitModal');
const modalBody = document.getElementById('modalBody');

function openUnit(unit) {
    modalBody.innerHTML = `
        <h2>${unit.name} Assessments</h2>
        <div style="margin-top:20px;">
            <h3>Written Assessments</h3>
            <ul>${unit.written.map(w => `<li>${w.title}: <strong>${w.grade}</strong> - <a href="${w.link}">View Script</a></li>`).join('')}</ul>
            <h3 style="margin-top:20px;">Practical Assessments</h3>
            <ul>${unit.practical.map(p => `<li>${p.title}: <strong>${p.grade}</strong> - <a href="${p.link}">View Checklist</a></li>`).join('')}</ul>
        </div>
    `;
    modal.style.display = "block";
}

// Close Modal
document.querySelector('.close-modal').onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

// Search Listener
searchInput.oninput = (e) => displayUnits(e.target.value);

// Burger Menu Toggle
document.getElementById('burger').onclick = () => {
    const nav = document.getElementById('navLinks');
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    nav.style.flexDirection = "column";
};

// Init
displayUnits();