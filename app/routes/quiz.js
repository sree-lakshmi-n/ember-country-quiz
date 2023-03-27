import Route from '@ember/routing/route';

export default class QuizRoute extends Route {
  async model() {
    return {
      title: 'Kuala Lumpur is the capital of',
      option: [
        { id: 'A', value: 'Malaysia' },
        { id: 'B', value: 'Finland' },
        { id: 'C', value: 'Sweden' },
        { id: 'D', value: 'Austria' },
      ],
    };
  }
}
