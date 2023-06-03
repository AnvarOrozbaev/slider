export const MOCK_OPTIONS = {
  /**
   * Delay for slide switching
   * @type {number}
   */
  delay: 2500,

  /**
   * Root element css selector
   * @required
   * @type {string} - css selector
   */
  root: '#slider',

  /**
   * Slider's width(no adaptive)
   * @type {number}
   */
  width: 750,

  /**
   * Slider's height
   * @type {number}
   */
  height: 400,

  /**
   * List of slides
   * @required
   * @type {Array<{ color: string, text: string }>} - color in hex, text is a simple string
   */
  slides: [
    {
      color: '#c62828',
      text: 'RED',
    },
    {
      color: '#ad1457',
      text: 'PINK',
    },
    {
      color: '#6a1b9a',
      text: 'PURPLE',
    },
    {
      color: '#4527a0',
      text: 'DEEP_PURPLE',
    },
    {
      color: '#283593',
      text: 'INDIGO',
    },
    {
      color: '#1565c0',
      text: 'BLUE',
    },
    {
      color: '#0277bd',
      text: 'LIGHT_BLUE',
    },
    {
      color: '#00838f',
      text: 'CYAN',
    },
    {
      color: '#00695c',
      text: 'TEAL',
    },
    {
      color: '#2e7d32',
      text: 'GREEN',
    },
    {
      color: '#558b2f',
      text: 'LIGHT_GREEN',
    },
    {
      color: '#827717',
      text: 'LIME',
    },
    {
      color: '#ef6c00',
      text: 'ORANGE',
    },
    {
      color: '#d84315',
      text: 'DEEP_ORANGE',
    },
    {
      color: '#4e342e',
      text: 'BROWN',
    },
  ],
};
