/* Ad slots — one place to configure them.
   mode 'placeholder': house slot inviting brands to contact us (no cookies, no
   third-party script). 'off' hides every slot. A real ad network must only be
   added behind a CNIL-compliant consent banner. */
export default {
  mode: 'placeholder',
  slots: {
    'landing-mid': { size: 'leaderboard' },
    'report-bottom': { size: 'rectangle' },
    'footer': { size: 'leaderboard' }
  }
};
