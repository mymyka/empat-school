import 'package:empat/shared/models/user_chanel.dart';

class UserVideo {
  final String widePreviewImage;
  final String title;
  final String timeDuration;
  final UserChanel chanel;
  final int views;
  final DateTime publishedAt;

  const UserVideo({
    required this.widePreviewImage,
    required this.title,
    required this.timeDuration,
    required this.chanel,
    required this.views,
    required this.publishedAt,
  });
}
