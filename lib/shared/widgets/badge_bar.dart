import 'package:empat/shared/widgets/flexible_list_view.dart';
import 'package:empat/shared/widgets/touchable_badge.dart';
import 'package:flutter/material.dart';

class BadgeBar extends StatelessWidget {
  final List<TouchableBadge> badges;

  const BadgeBar({
    super.key,
    required this.badges,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(10.0),
      child: FlexibleListView.builder(
        scrollDirection: Axis.horizontal,
        itemBuilder: (context, index) => badges[index],
        separatorBuilder: (context, index) => const SizedBox(width: 10),
        itemCount: badges.length,
      ),
    );
  }
}
