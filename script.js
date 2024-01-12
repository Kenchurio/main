document.addEventListener('DOMContentLoaded', function () {
   var cards = document.querySelectorAll('.card');

   cards.forEach(function (card) {
       card.addEventListener('mouseenter', function () {
           this.style.transform = 'scale(1.05)';
           this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
       });

       card.addEventListener('mouseleave', function () {
           this.style.transform = 'scale(1)';
           this.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
       });
   });
});
      var faqAccordion = document.getElementById('faqAccordion');
      var faqItems = [
          {
              question: "What is an Information System?",
              answer: "An Information System is a set of interconnected components that collect, process, store, and distribute information to support decision-making, coordination, control, analysis, and visualization in an organization."
          },
          {
              question: "Why are Information Systems important?",
              answer: "Information Systems play a crucial role in organizations, facilitating efficient communication, data management, and business processes. They encompass various types, including transaction processing systems, management information systems, decision support systems, and executive information systems."
          },
          {
              question: "What are the uses of Information Systems?",
              answer: "The uses of Information Systems are diverse. They aid in data storage and retrieval, automate routine tasks, enhance collaboration, provide insights through analytics, and contribute to strategic planning."
          },
 
      ];
      faqItems.forEach(function (item, index) {
          var faqItem = document.createElement('div');
          faqItem.className = 'card';
          faqItem.innerHTML = `
              <div class="card-header" id="faqHeading${index}">
                  <h2 class="mb-0">
                      <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                          ${item.question}
                      </button>
                  </h2>
              </div>
              <div id="collapse${index}" class="collapse" aria-labelledby="faqHeading${index}" data-parent="#faqAccordion">
                  <div class="card-body">
                      ${item.answer}
                  </div>
              </div>
          `;
          faqAccordion.appendChild(faqItem);
      });

function scrollToSection(sectionId) {
   document.getElementById(sectionId).scrollIntoView({
       behavior: 'smooth'
   });
}

function exploreTrends() {
   // Add your logic for exploring trends
   alert("Exploring Latest Trends!");
}
function handleLikeClick() {
   alert("Liked!");
}

function handleCommentClick() {
   // Add your logic for handling comments
   alert("Commented!");
}

function handleShareClick() {
   // Add your logic for handling shares
   alert("Shared!");
}
function exploreTrends() {
   window.open("https://www.simplilearn.com/top-technology-trends-and-jobs-article", "_blank");
}
document.addEventListener('scroll', function () {
   var backToTopBtn = document.getElementById('backToTopBtn');
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       backToTopBtn.classList.add('visible');
   } else {
       backToTopBtn.classList.remove('visible');
   }
});

function scrollToTop() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}