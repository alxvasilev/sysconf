{
  "targets": [
  {
    "target_name": "sysconf",
    "sources": [ "src/sysconf.cc" ],
    'include_dirs': [
        "<!(node -e \"require('nan')\")"
    ]
  }
  ]
}
