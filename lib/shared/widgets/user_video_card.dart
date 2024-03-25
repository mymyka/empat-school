import 'package:empat/shared/models/user_video.dart';
import 'package:flutter/material.dart';

class UserVideoCard extends StatelessWidget {
  final UserVideo userVideo;
  final void Function()? onTap;

  const UserVideoCard({
    super.key,
    required this.userVideo,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Hero(
        tag: userVideo.index,
        child: Card(
          elevation: 0,
          child: Column(
            children: [
              Stack(
                children: [
                  Image.network(userVideo.widePreviewImage, fit: BoxFit.cover),
                  Positioned(
                    bottom: 8,
                    right: 8,
                    child: Container(
                      padding: const EdgeInsets.all(4),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(5),
                        color: Colors.black,
                      ),
                      child: Text(
                        userVideo.timeDuration,
                        style:
                            const TextStyle(fontSize: 12, color: Colors.white),
                      ),
                    ),
                  ),
                ],
              ),
              ListTile(
                leading: CircleAvatar(
                  backgroundImage: NetworkImage(userVideo.chanel.avatarUrl),
                ),
                title: Text(
                  userVideo.title,
                  style: const TextStyle(fontWeight: FontWeight.bold),
                  overflow: TextOverflow.ellipsis,
                  maxLines: 1,
                ),
                subtitle: Text(
                  '${userVideo.chanel.name}  • ${userVideo.views} views  • ${DateTime.now().difference(userVideo.publishedAt).inDays ~/ 365} years ago',
                  overflow: TextOverflow.ellipsis,
                  maxLines: 2,
                ),
                trailing: const Icon(Icons.more_vert),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
