import 'package:empat/home/services/recommendation_service.dart';
import 'package:empat/shared/widgets/badge_bar.dart';
import 'package:empat/shared/widgets/flexible_list_view.dart';
import 'package:empat/shared/widgets/touchable_badge.dart';
import 'package:empat/shared/widgets/user_video_card.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  final RecommendationService recommendationService;

  const HomeScreen({
    super.key,
    this.recommendationService = const RecommendationService(),
  });

  @override
  Widget build(BuildContext context) {
    return FlexibleListView.fromChildren(
      children: [
        BadgeBar(
          badges: [
            TouchableBadge.create(child: const Icon(Icons.explore)),
            TouchableBadge.active(
              child: const Text(
                "All",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
            ),
            TouchableBadge.featured(
              child: const Text(
                "Featured",
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
            ),
            ...recommendationService.getUserTopics().map(
                  (topic) => TouchableBadge.create(
                    child: Text(
                      topic.name,
                      style: const TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
          ],
        ),
        ...recommendationService
            .getUserVideos()
            .map(
              (userVideo) => UserVideoCard(userVideo: userVideo),
            )
            .fold<List<Widget>>(
          [],
          (previousValue, element) => [
            ...previousValue,
            element,
            const SizedBox(height: 10),
          ],
        ),
      ],
    );
  }
}
