function FindProxyForURL(url, host)
{
		let ImageObject = new Image();
		ImageObject.src = "https://i.ysdtimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg";
		if (isPlainHostName(host) || ImageObject.height){
			return "DIRECT";
		} else {
			return "PROXY 192.168.1.16:8080";
		}
}
