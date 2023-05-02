# Quest 06. 인터넷의 이해

## Introduction
* 이번 퀘스트에서는 인터넷이 어떻게 동작하며, 서버와 클라이언트, 웹 브라우저 등의 역할은 무엇인지 알아보겠습니다.

## Topics
* 서버와 클라이언트, 그리고 웹 브라우저
* 인터넷을 구성하는 여러 가지 프로토콜
  * IP
  * TCP
  * HTTP
* DNS

## Resources
* [OSI 모형](https://ko.wikipedia.org/wiki/OSI_%EB%AA%A8%ED%98%95)
* [IP](https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
  * [Online service Traceroute](http://ping.eu/traceroute/)
* [TCP](https://ko.wikipedia.org/wiki/%EC%A0%84%EC%86%A1_%EC%A0%9C%EC%96%B4_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
  * [Wireshark](https://www.wireshark.org/download.html)
* [HTTP](https://ko.wikipedia.org/wiki/HTTP)
  * Chrome developer tool, Network tab
* [DNS](https://ko.wikipedia.org/wiki/%EB%8F%84%EB%A9%94%EC%9D%B8_%EB%84%A4%EC%9E%84_%EC%8B%9C%EC%8A%A4%ED%85%9C)
  * [Web-based Dig](http://networking.ringofsaturn.com/Tools/dig.php)

## Checklist
* 인터넷은 어떻게 동작하나요? Internet Protocol Suite의 레이어 모델에 입각하여 설명해 보세요.
  * 근거리에서 서로 떨어진 두 전자기기가 유선/무선으로 서로 통신하는 프로토콜은 어떻게 동작할까요?
  * 근거리에 있는 여러 대의 전자기기가 서로 통신하는 프로토콜은 어떻게 동작할까요?
  * 아주 멀리 떨어져 있는 두 전자기기가 유선/무선으로 서로 통신하는 프로토콜은 어떻게 동작할까요?
  * 두 전자기기가 신뢰성을 가지고 통신할 수 있도록 하기 위한 프로토콜은 어떻게 동작할까요?
  * HTTP는 어떻게 동작할까요?
* 우리가 브라우저의 주소 창에 www.knowre.com 을 쳤을 때, 어떤 과정을 통해 서버의 IP 주소를 알게 될까요?

## Quest
* tracert(Windows가 아닌 경우 traceroute) 명령을 통해 www.google.com 까지 가는 경로를 찾아 보세요.
  * 어떤 IP주소들이 있나요?
  * 그 IP주소들은 어디에 위치해 있나요?

222.120.41.81
112.188.85.137
112.188.77.57
112.174.90.146
112.174.84.58
72.14.202.136
108.170.242.129
108.170.242.146
142.251.254.81
142.250.229.250
108.170.243.33
142.251.69.231

* Wireshark를 통해 www.google.com 으로 요청을 날렸을 떄 어떤 TCP 패킷이 오가는지 확인해 보세요
  * TCP 패킷을 주고받는 과정은 어떻게 되나요?
  * 각각의 패킷에 어떤 정보들이 담겨 있나요?

클라이언트가 서버로 SYN 패킷을 보낸다.
서버는 SYN/ACK 패킷을 보내고, 클라이언트는 ACK 패킷을 보낸다.
데이터 전송을 위해 클라이언트가 데이터 패킷을 보낸다.
서버는 ACK 패킷을 보내고, 데이터를 받는다.

Source/Destination IP: 패킷을 보내거나 받는 컴퓨터의 IP 주소
Source/Destination Port: 패킷을 보내거나 받는 애플리케이션의 포트 번호
Sequence/ACK Number: 데이터 전송 시 순서를 유지하기 위한 번호
Flags: 패킷의 상태를 나타내는 정보 (SYN, ACK, FIN 등)
Window Size: 수신측이 데이터를 받을 준비가 되었다는 것을 알리는 정보

* telnet 명령을 통해 http://www.google.com/ URL에 HTTP 요청을 날려 보세요.
  * 어떤 헤더들이 있나요?
  * 그 헤더들은 어떤 역할을 하나요?
  
Host: 요청하는 웹사이트의 호스트 이름
User-Agent: 클라이언트의 브라우저 정보
Accept: 클라이언트가 받아들일 수 있는 문서 타입
Accept-Language: 클라이언트가 선호하는 언어
Connection: 클라이언트와 서버 간의 연결 상태 (keep-alive 등)

## Advanced
* HTTP의 최신 버전인 HTTP/3는 어떤 식으로 구성되어 있을까요?
* TCP/IP 외에 전세계적인 네트워크를 구성하기 위한 다른 방식도 제안된 바 있을까요?
