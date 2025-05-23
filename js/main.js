document.addEventListener('DOMContentLoaded', function() {
    // Nur die Lösungs-Button-Funktionalität beibehalten
    const solutionButtons = document.querySelectorAll('.solution-btn');
    
    solutionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const solutionDiv = document.getElementById(targetId);
            
            if (solutionDiv && solutionDiv.style.display === 'block') {
                solutionDiv.style.display = 'none';
                this.textContent = 'Lösung anzeigen';
                this.classList.remove('active');
            } else if (solutionDiv) {
                solutionDiv.style.display = 'block';
                this.textContent = 'Lösung ausblenden';
                this.classList.add('active');
            }
        });
    });

    // Initial alle Lösungen ausblenden
    const solutions = document.querySelectorAll('.solution');
    solutions.forEach(solution => {
        solution.style.display = 'none';
    });
});