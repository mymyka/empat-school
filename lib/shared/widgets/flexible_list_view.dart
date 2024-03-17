import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class FlexibleListView extends StatelessWidget {
  final List<Widget> Function(BuildContext) childrenBuilder;
  final Axis scrollDirection;

  const FlexibleListView._({
    super.key,
    this.scrollDirection = Axis.vertical,
    required this.childrenBuilder,
  });

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: scrollDirection,
      child: scrollDirection == Axis.vertical
          ? Column(
              children: childrenBuilder(context),
            )
          : Row(
              children: childrenBuilder(context),
            ),
    );
  }

  FlexibleListView.builder({
    Key? key,
    Axis scrollDirection = Axis.vertical,
    required final Widget Function(BuildContext, int) itemBuilder,
    required final Widget Function(BuildContext, int) separatorBuilder,
    required int itemCount,
  }) : this._(
          key: key,
          scrollDirection: scrollDirection,
          childrenBuilder: (context) => List.generate(
            itemCount * 2 - 1,
            (index) {
              if (index.isEven) {
                return itemBuilder(context, index ~/ 2);
              } else {
                return separatorBuilder(context, index ~/ 2);
              }
            },
          ),
        );

  FlexibleListView.fromChildren({
    Key? key,
    Axis scrollDirection = Axis.vertical,
    required List<Widget> children,
  }) : this._(
          key: key,
          scrollDirection: scrollDirection,
          childrenBuilder: (context) => children,
        );
}
