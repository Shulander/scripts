function FindProxyForURL(url, host) {
    if (isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0")) {
        return "DIRECT";
    }

    return "SOCKS 127.0.0.1:5050; DIRECT";
}
