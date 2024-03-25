import 'package:empat/app/widgets/logo.dart';
import 'package:flutter/material.dart';

class CustomDrawer extends StatelessWidget {
  const CustomDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Theme(
      data: Theme.of(context).copyWith(
        dividerTheme: const DividerThemeData(color: Colors.transparent),
      ),
      child: Drawer(
        child: ListView(
          children: [
            const DrawerHeader(
              child: Row(
                children: [
                  SizedBox(
                    width: 150,
                    child: Logo(),
                  ),
                ],
              ),
            ),
            ListTile(
              title: const Text("Home"),
              onTap: () {
                Navigator.of(context).pushNamed("/");
              },
            ),
            ListTile(
              title: const Text("Profile"),
              onTap: () {
                Navigator.of(context).pushNamed("/profile");
              },
            ),
            ListTile(
              title: const Text("Settings"),
              onTap: () {
                Navigator.of(context).pushNamed("/settings");
              },
            ),
          ],
        ),
      ),
    );
  }
}
