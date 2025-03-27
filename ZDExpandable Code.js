var expandables = document.querySelectorAll('.expandable');

expandables.forEach(function(expandable) {
  expandable.addEventListener('click', function() {
    var panel = this.nextElementSibling;
    var parentPanel = this.closest('.panel');
    var childPanels = panel.querySelectorAll('.panel');
    var expandedChildPanels = parentPanel ? parentPanel.querySelectorAll('.panel.expanded') : [];

    // Check if clicked expandable is a child or a parent
    if (parentPanel) {
      if (panel.classList.contains('expanded')) {
        panel.classList.remove('expanded');
        panel.style.maxHeight = null;
        parentPanel.style.maxHeight = parentPanel.scrollHeight - panel.scrollHeight + 'px';
      } else {
        // close other expanded child panels within the same parent panel
        expandedChildPanels.forEach(function(childPanel) {
          childPanel.classList.remove('expanded');
          childPanel.style.maxHeight = null;
        });
        // open clicked child panel
        panel.classList.add('expanded');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        parentPanel.style.maxHeight = parentPanel.scrollHeight + panel.scrollHeight + 'px';
      }
    } else {
      // open or close clicked parent panel
      if (panel.classList.contains('expanded')) {
        panel.classList.remove('expanded');
        panel.style.maxHeight = null;
      } else {
        panel.classList.add('expanded');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    }

    // update expandable icons
    expandable.classList.toggle('expanded');
    expandedChildPanels.forEach(function(childPanel) {
      var childExpandable = childPanel.previousElementSibling;
      if (childExpandable) {
        childExpandable.classList.remove('expanded');
      }
    });
  });
});
