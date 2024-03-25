import 'package:empat/shared/models/user_video.dart';
import 'package:empat/shared/widgets/user_video_card.dart';
import 'package:flutter/material.dart';

class WatchScreen extends StatelessWidget {
  final UserVideo userVideo;

  const WatchScreen({
    super.key,
    required this.userVideo,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Watch'),
      ),
      body: Column(
        children: [
          UserVideoCard(userVideo: userVideo),
        ],
      ),
    );
  }
}
