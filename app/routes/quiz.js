import Route from '@ember/routing/route';

export default class QuizRoute extends Route {
  async model() {
    return [
      {
        title: 'Which continent is home to the most countries?',
        option: [
          { id: 'A', value: 'Asia' },
          { id: 'B', value: 'Europe' },
          { id: 'C', value: 'South America' },
          { id: 'D', value: 'Africa' },
        ],
        answer: 'Africa',
        description: `Africa is first, with 54 countries, ahead of Asia’s 48 and Europe’s 44.`,
      },
      {
        title:
          'Thanks to its overseas territories, which country technically spans 12 time zones?',
        option: [
          { id: 'A', value: 'France' },
          { id: 'B', value: 'Russia' },
          { id: 'C', value: 'China' },
          { id: 'D', value: 'United States' },
        ],
        answer: 'France',
        description: `France and its territories cover 12 time zones, just ahead of Russia and the U.S., which have 11 each.`,
      },
      {
        title:
          'Which country has three capital cities—Pretoria, Cape Town, and Bloemfontein?',
        option: [
          { id: 'A', value: 'Nigeria' },
          { id: 'B', value: 'Chile' },
          { id: 'C', value: 'South Africa' },
          { id: 'D', value: 'Australia' },
        ],
        answer: 'South Africa',
        description: `South Africa’s executive and administrative capital is Pretoria, its legislative capital is Cape Town, and its judicial capital is Bloemfontein. It is the only country with three capital cities.
        `,
      },
      {
        title: 'In which country are the world’s 10 coldest cities located?',
        option: [
          { id: 'A', value: 'Canada' },
          { id: 'B', value: 'Sweden' },
          { id: 'C', value: 'United States' },
          { id: 'D', value: 'Russia' },
        ],
        answer: 'Russia',
        description: `Russia is home to 10 cities whose wintertime temperatures are regularly well below zero. Many of them are in Siberia.
        `,
      },
      {
        title:
          'With an area of less than 0.2 square mile (0.5 square kilometer), which is the smallest country in the world?',
        option: [
          { id: 'A', value: 'Barbados' },
          { id: 'B', value: 'Malta' },
          { id: 'C', value: 'Vatican City' },
          { id: 'D', value: 'Cyprus' },
        ],
        answer: 'Vatican City',
        description: `Vatican City, home to the pope, is the smallest country in the world. It has an area of less than 0.2 square mile (0.5 square kilometer) and a population of some 800 people.`,
      },
      {
        title:
          'Home to languages like Tok Pisin, Hiri Motu, and a German creole known as Unserdeutsch, which is the most linguistically diverse country in the world?',
        option: [
          { id: 'A', value: 'India' },
          { id: 'B', value: 'Papua New Guinea' },
          { id: 'C', value: 'Brazil' },
          { id: 'D', value: 'Nigeria' },
        ],
        answer: 'Papua New Guinea',
        description: `Papua New Guinea is home to 840 living languages, the most in the world.`,
      },
      {
        title:
          'Supposedly home to a “monster,” Loch Ness is one of many inland seas—or “lochs”—in which country?',
        option: [
          { id: 'A', value: 'Scotland' },
          { id: 'B', value: 'Wales' },
          { id: 'C', value: 'Ireland' },
          { id: 'D', value: 'England' },
        ],
        answer: 'Scotland',
        description: `Although there were rumors of creatures in Scotland’s Loch Ness in the 1800s, interest really took off after a 1933 newspaper article quoted a businessman as claiming that he had seen a “most extraordinary form of animal” entering the loch. The legendary sea creature is now endearingly referred to as “Nessie."`,
      },
      {
        title:
          'Which of these is NOT one of the 13 countries crossed by the Equator? ',
        option: [
          { id: 'A', value: 'Egypt' },
          { id: 'B', value: 'Kenya' },
          { id: 'C', value: 'Indonesia' },
          { id: 'D', value: 'Ecuador' },
        ],
        answer: 'Egypt',
        description: `Egypt lies above the Equator`,
      },
      {
        title:
          'Thanks to the tombs built by the ancient kingdom of Kush, which country is home to—by far—the most pyramids in the world?',
        option: [
          { id: 'A', value: 'Cambodia' },
          { id: 'B', value: 'Sudan' },
          { id: 'C', value: 'Colombia' },
          { id: 'D', value: 'Mexico' },
        ],
        answer: 'Sudan',
        description: `Although many might associate pyramids with Egypt, Sudan has about 220, far ahead of second-place Egypt’s 138.`,
      },
    ];
  }
}
