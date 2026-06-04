/**
 * Carousel navigation utility
 * moveCarousel(trackId, direction)
 *   direction: -1 = prev, +1 = next
 */
function moveCarousel(trackId, direction) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const slides = track.querySelectorAll('.video-slide');
  if (!slides.length) return;

  // Calculate slide width (including gap)
  const style = getComputedStyle(track);
  const gap = parseFloat(style.gap) || 20;
  const slideWidth = slides[0].offsetWidth + gap;

  // Read current offset from data attr
  let current = parseFloat(track.dataset.offset || 0);
  const maxOffset = -(slideWidth * (slides.length - 2));

  current -= direction * slideWidth;
  current = Math.max(maxOffset, Math.min(0, current));

  track.dataset.offset = current;
  track.style.transform = `translateX(${current}px)`;
}
