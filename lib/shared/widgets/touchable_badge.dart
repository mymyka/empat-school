import 'package:flutter/material.dart';
import 'package:gradient_borders/gradient_borders.dart';

class TouchableBadge extends StatelessWidget {
  final Widget child;
  final void Function()? onPressed;

  const TouchableBadge({super.key, required this.child, this.onPressed});

  TouchableBadge.active(
      {Key? key, required Widget child, void Function()? onPressed})
      : this(
          onPressed: onPressed,
          key: key,
          child: Container(
            padding: const EdgeInsets.all(10),
            decoration: const BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(5)),
              color: Colors.black,
            ),
            child: child,
          ),
        );

  TouchableBadge.featured({
    Key? key,
    required Widget child,
    void Function()? onPressed,
  }) : this(
          onPressed: onPressed,
          key: key,
          child: Container(
            padding: const EdgeInsets.all(10),
            decoration: const BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(5)),
              color: Color(0xFFEEEEEE),
              border: GradientBoxBorder(
                gradient: LinearGradient(
                  colors: [
                    Color(0xff1f005c),
                    Color(0xff5b0060),
                    Color(0xff870160),
                    Color(0xffac255e),
                    Color(0xffca485c),
                    Color(0xffe16b5c),
                    Color(0xfff39060),
                    Color(0xffffb56b),
                  ],
                ),
              ),
            ),
            child: child,
          ),
        );

  TouchableBadge.create({
    Key? key,
    required Widget child,
    void Function()? onPressed,
  }) : this(
          onPressed: onPressed,
          key: key,
          child: Container(
            padding: const EdgeInsets.all(10),
            decoration: const BoxDecoration(
              borderRadius: BorderRadius.all(Radius.circular(5)),
              color: Color(0xFFEEEEEE),
            ),
            child: child,
          ),
        );

  @override
  Widget build(BuildContext context) => GestureDetector(
        onTap: onPressed,
        child: child,
      );
}
