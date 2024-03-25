import 'package:empat/shared/models/user_chanel.dart';
import 'package:empat/shared/models/user_topic.dart';
import 'package:empat/shared/models/user_video.dart';
import 'package:faker/faker.dart';

class RecommendationService {
  const RecommendationService();

  List<UserTopic> getUserTopics() {
    return [
      const UserTopic(name: 'Flutter'),
      const UserTopic(name: 'Dart'),
      const UserTopic(name: 'Popular'),
      const UserTopic(name: 'Fullstack'),
      const UserTopic(name: 'One Piece'),
      const UserTopic(name: 'TensorFlow'),
      const UserTopic(name: 'Android'),
      const UserTopic(name: 'iOS'),
      const UserTopic(name: 'Web'),
      const UserTopic(name: 'UI/UX'),
    ];
  }

  List<UserVideo> getUserVideos() {
    return List.generate(
      10,
      (index) => UserVideo(
        index: index,
        chanel: UserChanel(
          name: faker.person.name(),
          avatarUrl: faker.image.image(),
        ),
        widePreviewImage: faker.image.image(
          width: 1920,
          height: 1080,
        ),
        publishedAt: faker.date.dateTime(
          minYear: 2000,
          maxYear: 2010,
        ),
        timeDuration:
            '${faker.randomGenerator.integer(100)}:${faker.randomGenerator.integer(10)}',
        title: faker.lorem.sentence(),
        views: faker.randomGenerator.integer(1000),
      ),
    );
  }
}
