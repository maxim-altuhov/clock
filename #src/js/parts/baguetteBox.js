import baguetteBox from 'baguettebox.js';

function galleryBox() {
	if ($('.gallery').length > 0) {
		baguetteBox.run('.gallery', {
			// Custom options
		});
	}
}

export default galleryBox;